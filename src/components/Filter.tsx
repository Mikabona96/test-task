"use client"
import React, { useState } from 'react'
import type {VehicleItem} from '@/types'
import Link from 'next/link'
import { cn } from '@/tools/cn'

interface IProps {
  vehicles: VehicleItem[]
}

export const Filter = ({vehicles}: IProps) => {
  const [car, setCar] = useState('')
  const [year, setYear] = useState('')

  const selectCarHandle = (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
   const target = e.target as HTMLSelectElement
   setCar(target.value)
  }

  const selectYearHandle = (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
   const target = e.target as HTMLSelectElement
   setYear(target.value)
  }

  return (
    <div className='w-[600px] flex justify-between'><select onChange={selectCarHandle} className="w-fit max-w-[150px]" name="select-name">
      <option value={''}>Select a car</option>
      {
        vehicles.map((res, i) => (

          <option key={i} value={res.MakeId}>{res.MakeName}</option>
        ))
      }
    </select>

      <select onChange={selectYearHandle} name="select-year">
        <option value={''}>Select a year</option>
      {['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'].map(y => (

        <option key={y} value={y}>{y}</option>
      ))}
    </select>

      <button disabled={!car && !year} className={cn('bg-gray-500 cursor-not-allowed', {
        'bg-blue-600 cursor-pointer': car.length && year.length
      })}>
        <Link className='select-none cursor-[inherit]' href={`/result/${car}/${year}`}>
          Next
        </Link>
      </button>
    </div>
  )
}
