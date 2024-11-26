// const Password = () => {
//   const [ispass, setispass] = useState(false);

//   const [num, setnum] = useState(0);

//   const change = (e: any) => {
//     const length = e.target.value.length;
//     const value = e.target.value;
//     setnum(length);

//     if (length < 4 || 12 < length) {
//       setispass((prev) => false);
//     } else if (["!", "@", "#"].some((v) => value.includes(v))) {
//       setispass((prev) => false);
//     } else {
//       setispass((prev) => true);
//     }
//   };
//   return (
//     <div className="App">
//       <input onChange={change} type="text"></input>
//       <span>{ispass ? "통과" : "오류"}</span>
//       <Input />
//     </div>
//   );
// };

export default Password;
