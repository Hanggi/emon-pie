// 'use client';

// import React, { HTMLAttributes, useCallback, useState } from 'react';
// import Image from 'next/image';
// import { Cell, Pie, PieChart, Sector } from 'recharts';

// import { cn } from '@/lib/utils';
// import { Text } from '@/components/ui/text';

// interface ModelProps extends HTMLAttributes<HTMLDivElement> {}

// const data = [
//   { label: '私募 100亿', value: 100, color: '#F4436D' },
//   { label: '空投 50亿', value: 50, color: '#C2F443' },
//   { label: '交易池 50亿', value: 50, color: '#BB43F4' },
//   { label: '挖矿 650亿', value: 650, color: '#F48B42' },
//   { label: '项目方保留 50亿', value: 50, color: '#27D06B' },
//   { label: '100亿于2025年解锁', value: 100, color: '#438AF5' },
// ];

// const renderActiveShape = (props: any) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     label,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//         stroke="#000"
//         strokeWidth={2}
//       />

//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke="#fff"
//         fill="none"
//       />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#fff"
//       >{`${label}`}</text>
//     </g>
//   );
// };

// export default function Model({ className, ...props }: ModelProps) {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const onPieEnter = useCallback(
//     (_, index) => {
//       setActiveIndex(index);
//     },
//     [setActiveIndex]
//   );
//   return (
//     <>
//       <div
//         className={cn(
//           'container mb-4 flex flex-col items-center gap-4 relative',
//           className
//         )}
//         {...props}
//       >
//         <Text intent="heading">代币模型</Text>

//         {/* Legend Section */}
//         <div className="mt-6 w-[380px] sm:w-[800px] flex flex-wrap justify-center gap-x-5 sm:gap-x-10 gap-y-6">
//           {data.map((entry, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <div
//                 className="w-2 sm:w-4 h-2 sm:h-4 rounded-full border border-black"
//                 style={{ backgroundColor: entry.color }}
//               ></div>
//               <Text variant="sm/default/white">{entry.label}</Text>
//             </div>
//           ))}
//         </div>

//         <div className="relative my-10">
//           <PieChart width={700} height={400}>
//             <Pie
//               data={data}
//               cx="50%"
//               cy="50%"
//               innerRadius={110}
//               outerRadius={160}
//               dataKey="value"
//               // label={(entry: { label: any }) => `${entry.label}`}
//               activeIndex={activeIndex}
//               activeShape={renderActiveShape}
//               onMouseEnter={onPieEnter}
//             >
//               {data.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={entry.color}
//                   stroke="#000"
//                   strokeWidth={2}
//                   shapeRendering={renderActiveShape}
//                 />
//               ))}
//             </Pie>
//           </PieChart>
//           <div className='absolute inset-0 bg-white/5 rounded-full w-[400px] h-[400px] -z-50 mx-auto'></div>
//           <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center">
//             <Image
//               alt=""
//               src="/assets/images/pie-model.png"
//               width={100}
//               height={100}
//               className="w-[140px] h-[100px]"
//             />
//             <p className="text-white text-xl">总量1000亿</p>
//           </div>
//         </div>
//         <Image
//           alt=""
//           src="/assets/images/model-cartoon.png"
//           width={100}
//           height={100}
//           className="w-[67px] sm:w-[140px] h-[94px] sm:h-[195px] absolute bottom-0 sm:bottom-10 left-0 sm:left-36"
//         />
//       </div>
//       {/* <Images.hr /> */}
//     </>
//   );
// }
