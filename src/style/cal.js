import styled from "styled-components";

export const Container=styled.div`
display:grid;

justify-content:center;
width:400px;
margin:80px auto;
// min-height:200px;
background-color:rgba(255,255,255,.7);
grid-template-columns:repeat(4,120px)
// border:2px;
border-radius:10px  ;
`;
export const Screen=styled.div`
// display:flex;
// justify-content:right;
// flex-wrap:wrap;
// word-wrap: break-word;
// background-color:rgba(210,210,210);
// box-shadow:2px 4px 5px 7px #888888;
// width:400px;

// border:2px solid black;
// border-radius:10px  ;
width: 400px;
background: #ddd;
border: 5px;
color: #222;
padding: 10px;
text-align: right;
min-height:75px;
`
export const Prev=styled.div`
font-size:1rem;
`;
export const Curr=styled.div`
color:white;
font-size:2rem;
`;
export const Button=styled.button`
Cursor:pointer;
width:100%;
&:hover{
    background-color:rgba(255,255,255,.9);
}
${({operation})=> operation && "background-color:gray;"}
${({fast})=> fast && "background-color:green;"}
${({del})=> del && "background-color:red;"}
${({bl})=> bl && "background-color:blue;"}
${({decimal})=> decimal && "background-color:gray;"}
`
export const Nos = styled.div`
display:grid;
gap:0;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
min-height:350px;

`