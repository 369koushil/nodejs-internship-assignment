import { PrismaClient } from '@prisma/client/edge';
import {withAccelerate} from '@prisma/extension-accelerate'
import { Hono } from 'hono';

const EuclidDist = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  return Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lng2 - lng1, 2));
};

const schoolRouter = new Hono<{
  Bindings:{
    DATABASE_URL:string
  }
}>;

schoolRouter.get('alive',(c)=>{
return c.json({msg:'backend is alive '},200);
})

schoolRouter.post('/addSchool', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const { name, address, latitude, longitude } = await c.req.json();
    if (!name || !address || !latitude || !longitude) {
      return c.json({ error: 'Missing required fields' }, 400);
    }
    const school = await prisma.school.create({
      data: {
        name,
        address,
        latitude,
        longitude,
      },
    });
    return c.json(school, 200);
  } catch (error) {
    return c.json({ error: 'Error creating school' }, 500);
  }
  finally {
    await prisma.$disconnect(); 
  }
});

schoolRouter.get('/listSchools', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const userLat = parseFloat(c.req.query('latitude') || '');
    const userLng = parseFloat(c.req.query('longitude') || '');

    if (isNaN(userLat) || isNaN(userLng)) {
      return c.json({ error: 'Invalid latitude or longitude' }, 400);
    }

    
    const schools = await prisma.school.findMany();


    const sortedSchools = schools.sort((a, b) => {
      const distanceA = EuclidDist(userLat, userLng, a.latitude, a.longitude);
      const distanceB = EuclidDist(userLat, userLng, b.latitude, b.longitude);
      return distanceA - distanceB;
    });

    return c.json(sortedSchools, 200);
  } catch (error) {
    return c.json({ error: 'Error fetching schools' }, 500);
  }
  finally {
    await prisma.$disconnect(); 
  }
  
});

export default schoolRouter;
