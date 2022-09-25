import styled from 'styled-components';
import './styles_components.css';
export const H1 = styled.h1`
    font-family: sans-serif;
    font-size: 32px;
    margin-top: 5px;
    color: #9adcff;
`;
export const H2 = styled.h2`
    font-family: sans-serif;
    font-size: 24px;
    margin-top: 5px;
    color: #c1ffd7;
`;
export const H3 = styled.h3`
    font-family: sans-serif;
    font-size: 18px;
    margin-top: 5px;
    color: #d3cedf;
`;
export const H4 = styled.h4`
    font-family: sans-serif;
    font-size: 16px;
    margin-top: 5px;
    color: #d3cedf;
    margin-top: 5px;
`;
export const H5 = styled.h5`
    font-size: 16px;
    font-family: sans-serif;
    color: #80c0ce;
    text-align: left;
    padding: 10px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 0px;
    margin-left: 0px;
    border-left: 0.3rem solid #0096ff;
`;

export const H6 = styled.h6`
    font-family: sans-serif;
    font-size: 18px;
    margin-top: 5px;
    color: #d3cedf;
    font-weight: bold;
`;

export const Text = styled.p`
    color: #bface0;
    margin-top: 5px;
    font-weight: italic;
    font-size: 16px;
    font-family: sans-serif;
`;

export const Code = styled.div`
    font-size: 16px;
    font-family: sans-serif;
    // background: #a5c9ca;
    // background: #a5c9ca;
    padding: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 0px;
    margin-left: 0px;
    text-align: left;
    border: 2px solid #151965;
    border-radius: 8px;
`;

export const aside = styled.button`
    font-size: 16px;
    font-family: sans-serif;
    color: #d3cedf;
    text-align: left;
    padding: 10px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 0px;
    margin-left: 0px;
    border-left: 0.2rem solid #a7c5eb;
`;

export const note = styled.button`
    font-size: 16px;
    font-family: sans-serif;
    color: #d3cedf;
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
    color: #d3cedf;
    text-align: left;
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 0px;
    margin-left: 0px;
    border-bottom: 0.2rem ridge #af0171;
    border-left: 0.5rem double #c3ff99;
    // border-top: 0.5rem double #1c6758;
    // border-right: 4px solid #16213e;
`;

export const danger = styled.div`
    background: #ffdddd;
    border-left: 6px solid #f44336;
    margin-bottom: 15px;
    padding: 4px 12px;
    font-size: 16px;
    font-family: sans-serif;
    color: #06113c;
    text-align: left;
`;

export const success = styled.div`
    // background: #ddffdd;
    background-color: rgba(221, 255, 221, 0.9);
    border-left: 6px solid #04aa6d;
    margin-bottom: 15px;
    padding: 4px 12px;
    font-size: 16px;
    font-family: sans-serif;
    color: #06113c;
    text-align: left;
    // width: fit-content;
`;

export const info = styled.div`
    background: #e7f3fe;
    border-left: 6px solid #2196f3;
    margin-bottom: 15px;
    padding: 4px 12px;
    font-size: 16px;
    font-family: sans-serif;
    color: #06113c;
    text-align: left;
`;

export const warning = styled.div`
    background: #ffffcc;
    border-left: 6px solid #ffeb3b;
    margin-bottom: 15px;
    padding: 4px 12px;
    font-size: 16px;
    font-family: sans-serif;
    color: #06113c;
    text-align: left;
`;
export const que = styled.p`
    font-size: 16px;
    font-family: sans-serif;
    color: #3e00ff;
    text-align: left;
    padding: 10px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 0px;
    margin-left: 0px;
    border-left: 0.3rem solid #0096ff;
`;
export const tag = styled.span`
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: #999;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    -webkit-transition: color 0.2s;
    &:after {
        background: #1a202c;
        border-bottom: 13px solid transparent;
        border-left: 10px solid #eee;
        border-top: 13px solid transparent;
        content: '';
        position: absolute;
        right: 0;
        top: 0;
    }
    &:before {
        background: #1a202c;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content: '';
        height: 6px;
        left: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }
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
    color: #d3cedf;
`;
