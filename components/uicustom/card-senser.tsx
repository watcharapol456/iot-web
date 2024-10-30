'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
export const CardSensor = () => {
    const [temperature, setTemperature] = useState<number | null>(null);
    const [humidity, sethumidity] = useState<number | null>(null);
  
    async function fetchTemperature() {
      try {
        const res = await fetch('http://localhost:1880/temp');
        if (!res.ok) {
          throw new Error('Failed to fetch temperature data');
        }
        const data = await res.json();
        setTemperature(data.temperature);
        sethumidity(data.humidity)
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      fetchTemperature();
      const interval = setInterval(fetchTemperature, 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className='flex gap-16'>
        <div className='bg-cyan-400 w-[300px] h-[150px] rounded-md '>
            <div className='flex justify-center h-full items-center   flex-col'>
              <div className='my-5 mt-2 flex '>
              <h1 className='text-2xl font-bold text-white'>Temperature</h1>
              <Image 
              src={'/assets/thermometer.svg'}
              width={30}
              height={20}
              alt='temp'
              />
              </div>
                <div className='mt-2 text-3xl font-semibold text-white'>
                  {temperature} °C
                  </div>
            </div>
        </div>
        <div className='bg-cyan-400 w-[300px] h-[150px] rounded-md '>
            <div className='flex justify-center h-full items-center   flex-col'>
              <div className='my-5 mt-2 flex'>
              <h1 className='text-2xl font-bold text-white'>Humidity</h1>
              <Image 
              src={'/assets/droplets.svg'}
              width={30}
              height={20}
              alt='temp'
              className='mx-2'
              />
              </div>
                <div className='mt-2 text-3xl font-semibold text-white'>
                  {humidity} %
                  </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default CardSensor;
  