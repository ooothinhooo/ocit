// import React from 'react';
// import Accordion2 from '../children/Accordion2';
// import './test.css';
// import Tree, { useTreeState } from 'react-hyper-tree';
// function Test() {
//     const data = [
//         {
//             id: 1,
//             name: 'Parent 1',
//             children: [
//                 {
//                     id: 2,
//                     name: 'Child 1',
//                     children: [
//                         {
//                             id: 5,
//                             name: `<a href="https://github.com/" target="_blank">
//                                 Link
//                             </a>
//                                 `,
//                         },
//                         {
//                             id: 6,
//                             name: 'Child 1__2',
//                         },
//                         {
//                             id: 7,
//                             name: 'Child 1__3',
//                         },
//                     ],
//                 },
//             ],
//         },
//         {
//             id: 2,
//             name: 'Parent 2',
//             children: [
//                 {
//                     id: 2,
//                     name: 'Child 1',
//                     children: [
//                         {
//                             id: 5,
//                             name: 'Child 1__1',
//                         },
//                         {
//                             id: 6,
//                             name: 'Child 1__2',
//                         },
//                         {
//                             id: 7,
//                             name: 'Child 1__3',
//                         },
//                     ],
//                 },
//             ],
//         },
//     ];
//     const { required, handlers } = useTreeState({
//         data,
//         id: 'your_tree_id',
//     });

//     return (
//         // <>
//         //     <div class="test_container">
//         //         <h1 class="test_title">eFuse</h1>
//         //         <h1 class="test_title test_title-large">eFuse</h1>
//         //         <div id="test_img-1" class="test_img-container">
//         //             <img class="test_img" src="https://cdn.wallpapersafari.com/78/74/QfSdUt.jpg" />
//         //         </div>

//         //         <div class="test_img-container test_second-animation">
//         //             <img class="test_img" src="https://wallpapershome.com/images/pages/pic_v/13886.jpg" />
//         //         </div>

//         //         <div class="test_img-container test_third-animation">
//         //             <img class="test_img" src="https://images2.alphacoders.com/474/thumb-1920-474206.jpg" />
//         //         </div>

//         //         <div class="test_img-container test_fourth-animation">
//         //             <img class="test_img test_nba" src="https://wallpapercave.com/wp/wp3639738.jpg" />
//         //         </div>

//         //         <div class="test_img-container test_fifth-animation">
//         //             <img class="test_img" src="http://hdqwalls.com/wallpapers/fortnite-g5.jpg" />
//         //         </div>

//         //         <div id="test_img-6" class="test_img-container test_sixth-animation">
//         //             <img
//         //                 class="test_img"
//         //                 src="http://orig15.deviantart.net/3c71/f/2016/121/9/4/reaper_wallpaper__overwatch__by_prollgurke-da0wf9m.png"
//         //             />
//         //         </div>

//         //         <div id="test_img-7" class="test_img-container test_seventh-animation">
//         //             <img class="test_img" src="https://images4.alphacoders.com/885/thumb-1920-885543.jpg" />
//         //         </div>
//         //     </div>
//         // </>
//         // <>
//         //     <Accordion2
//         //         title="Accordion"
//         //         desc={`Switch đảm bảo rằng chỉ một trong các router thích hợp được hiển thị tại một thời điểm. Nó sẽ chỉ hiển thị router đầu tiên phù hợp với url và không hiển thị router nào khác. Vì lý do này, chúng ta phải đặt thành phần 404 cuối cùng`}
//         //     />
//         // </>
//         <div className="bg-[#256D85] text-white p-4 rounded-lg shadow-lg">
//             <Tree {...required} {...handlers} />
//         </div>
//     );
// }

// export default Test;
