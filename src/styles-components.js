import styled from 'styled-components';
import './index.css';
export const H1 = styled.h1`
    font-family: sans-serif;
    font-size: 32px;
    margin-top: 5px;
    color: #256d85;
`;
export const H2 = styled.h2`
    font-family: sans-serif;
    font-size: 24px;
    margin-top: 5px;
    color: #256d85;
`;
export const H3 = styled.h3`
    font-family: sans-serif;
    font-size: 18px;
    margin-top: 5px;
    color: #256d85;
`;
export const H4 = styled.h4`
    font-family: sans-serif;
    font-size: 16px;
    margin-top: 5px;
    color: #256d85;
    margin-top: 5px;
`;
export const H5 = styled.h5`
    font-family: sans-serif;
    font-size: 13px;
    margin-top: 5px;
    color: #256d85;
`;

export const H6 = styled.h6`
    font-family: sans-serif;
    font-size: 18px;
    margin-top: 5px;
    color: #256d85;
    font-weight: bold;
`;

export const Text = styled.p`
    color: #bface0;
    margin-top: 5px;
    font-weight: italic;
    font-size: 16px;
    font-family: sans-serif;
`;

export const Code = styled.button`
    font-size: 16px;
    font-family: sans-serif;
    background: #a5c9ca;
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 0px;
    margin-left: 0px;
    text-align: left;
    border-radius: 8px;
`;


export const aside = styled.button`
    font-size: 16px;
    font-family: sans-serif;
    color: #256d85;
    text-align: left;
    padding: 10px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 0px;
    margin-left: 0px;
    border-left: 0.2rem solid #1e5128;
`;

export const note = styled.button`
    font-size: 16px;
    font-family: sans-serif;
    color: #256d85;
    text-align: left;
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 0px;
    margin-left: 0px;
    border: dashed 2px #044a42;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    padding: 1em;
`;

export const pre = styled.button`
    font-size: 16px;
    font-family: sans-serif;
    color: #256d85;
    text-align: left;
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 0px;
    margin-left: 0px;
    border-bottom: 4px groove #16213e;
    border-top: 4px solid #16213e;
    border-right: 4px solid #16213e;
    border-left: 0.5rem double #1c6758;
`;

export const danger = styled.div`
    background: #ffdddd;
    border-left: 6px solid #f44336;
    margin-bottom: 15px;
    padding: 4px 12px;
    font-size: 16px;
    font-family: sans-serif;
    color: #256d85;
    text-align: left;
`;

export const success = styled.div`
    background: #ddffdd;
    border-left: 6px solid #04aa6d;
    margin-bottom: 15px;
    padding: 4px 12px;
    font-size: 16px;
    font-family: sans-serif;
    color: #256d85;
    text-align: left;
`;

export const info = styled.div`
    background: #e7f3fe;
    border-left: 6px solid #2196f3;
    margin-bottom: 15px;
    padding: 4px 12px;
    font-size: 16px;
    font-family: sans-serif;
    color: #256d85;
    text-align: left;
`;

export const warning = styled.div`
    background: #ffffcc;
    border-left: 6px solid #ffeb3b;
    margin-bottom: 15px;
    padding: 4px 12px;
    font-size: 16px;
    font-family: sans-serif;
    color: #256d85;
    text-align: left;
`;

export const ul = styled.ul`
    list-style-type: circle;
`;
export const ol = styled.ol`
    list-style-type: lower-alpha;
`;

export const create = styled.div`
    margin-top: 5rem;
    text-align: right;
    font-size: 14px;
    font-family: sans-serif;
    color: #256d85;
`;
{
    /* <style>
ul.a {list-style-type: circle;}
ul.b {list-style-type: square;}
ol.c {list-style-type: upper-roman;}
ol.d {list-style-type: lower-alpha;}
</style> */
}