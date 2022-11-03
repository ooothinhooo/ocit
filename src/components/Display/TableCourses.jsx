import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TableCourses({ MaHP, year, n }) {
    // const [statex, setState] = useState([]);

    // function componentDidMount() {}
    // axios.get(`https://api.tools.w5team.com/courses/key/ct287?y=20222023&n=1`).then((res) => {
    //     const persons = res.data;
    //     setState({ persons });
    // });
    console.log(MaHP);
    console.log(year);
    console.log(n);

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);
            try {
                const { data: response } = await axios.get(
                    `https://api.tools.w5team.com/courses/key/${MaHP}?y=${year}&n=${n}`,
                );
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            // setLoading(false);
        };

        fetchData();
    }, []);
    console.log(data);
    return (
        <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead class="bg-gray-800 text-gray-500">
                    <tr>
                        <th class="p-2"> Ký hiệu</th>
                        <th class="p-2 ">Thứ</th>
                        <th class="p-2 ">Tiết BĐ</th>
                        <th class="p-2 ">Số Tiết</th>
                        <th class="p-2 ">Phòng</th>
                        <th class="p-2 ">Sỉ số</th>
                        <th class="p-2 ">Sỉ số còn lại</th>
                        <th class="p-2 ">Lớp Học</th>
                    </tr>
                </thead>
                {/* <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class=" px-2 bg-slate-300">
                            Ký hiệu
                        </th>
                        <th scope="col " class="py-3 px-6 bg-slate-400">
                            Thứ
                        </th>
                        <th scope="col" class="py-3 px-6 bg-slate-300">
                            Tiết BĐ
                        </th>
                        <th scope="col" class="py-3 px-6  bg-slate-400">
                            Số tiết
                        </th>
                        <th scope="col" class="py-3 px-6 bg-slate-300">
                            Phòng
                        </th>
                        <th scope="col" class="py-3 px-6 bg-slate-400">
                            Sỉ Số
                        </th>
                        <th scope="col" class="py-3 px-6 bg-slate-300">
                            Sỉ Số còn lại
                        </th>
                        <th scope="col" class="py-3 px-6 bg-slate-400">
                            Lớp Học
                        </th>
                    </tr>
                </thead> */}
                <tbody>
                    {data.map((person, index) => (
                        <>
                            <tr
                                class={`bg-gray-700 text-gray-100 text-center ${
                                    index % 2 == 0 ? 'bg-gray-600' : 'bg-gray-700'
                                }`}
                            >
                                <td class="p-2">{person.id}</td>
                                <td class="p-2">{person.time[0].day}</td>
                                <td class="p-2 font-bold">{person.time[0].start}</td>
                                <td class="p-2">{person.time[0].count}</td>
                                <td class="p-2 ">{person.time[0].room}</td>
                                <td class="p-2 ">{person.member}</td>
                                <td class="p-2 ">{person.available}</td>
                                <td class="p-2 ">{person.class}</td>
                            </tr>
                            {/* <tr class="bg-white border-b border-black  text-black hover:bg-slate-100">
                                <th
                                    scope="row"
                                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-slate-300 dark:text-white"
                                >
                                    {person.id}
                                </th>
                                <td class=" px-2  bg-slate-400">{person.time[0].day}</td>
                                <td class="py-1 px-2 bg-slate-300">{person.time[0].start}</td>
                                <td class="py-1 px-2 bg-slate-400">{person.time[0].count}</td>
                                <td class="py-1 px-2 bg-slate-300">{person.time[0].room}</td>
                                <td class="py-1 px-2 bg-slate-400">{person.member}</td>
                                <td class="py-1 px-2 bg-slate-300">{person.available}</td>
                                <td class="py-1 px-2 bg-slate-400">{person.class}</td>
                            </tr> */}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableCourses;
// export default class TableCourses extends React.Component {
//     state = {
//         persons: [],
//     };

//     componentDidMount() {
//         axios.get(`https://api.tools.w5team.com/courses/key/ct287?y=20222023&n=1`).then((res) => {
//             const persons = res.data;
//             this.setState({ persons });
//         });
//     }

//     render() {
//         return (
//             <div class="overflow-x-auto relative">
//                 <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                     <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             <th scope="col" class="py-3 px-6">
//                                 Ký hiệu
//                             </th>
//                             <th scope="col" class="py-3 px-6">
//                                 Thứ
//                             </th>
//                             <th scope="col" class="py-3 px-6">
//                                 Tiết BĐ
//                             </th>
//                             <th scope="col" class="py-3 px-6">
//                                 Số tiết
//                             </th>
//                             <th scope="col" class="py-3 px-6">
//                                 Phòng
//                             </th>
//                             <th scope="col" class="py-3 px-6">
//                                 Sỉ Số
//                             </th>
//                             <th scope="col" class="py-3 px-6">
//                                 Sỉ Số còn lại
//                             </th>
//                             <th scope="col" class="py-3 px-6">
//                                 Lớp Học
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.persons.map((person) => (
//                             <>
//                                 <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                                     <th
//                                         scope="row"
//                                         class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                                     >
//                                         {person.id}
//                                     </th>
//                                     <td class="py-4 px-6">{person.time[0].day}</td>
//                                     <td class="py-4 px-6">{person.time[0].start}</td>
//                                     <td class="py-4 px-6">{person.time[0].count}</td>
//                                     <td class="py-4 px-6">{person.time[0].room}</td>
//                                     <td class="py-4 px-6">{person.member}</td>
//                                     <td class="py-4 px-6">{person.available}</td>
//                                     <td class="py-4 px-6">{person.class}</td>
//                                 </tr>
//                             </>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }
