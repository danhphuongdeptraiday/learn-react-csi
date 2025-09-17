import "./AppHeader.css";

function AppHeader({ arrayHeaders }) {
  console.log(arrayHeaders);
  console.log("uhaisdkjhaksjdh");
  console.log("laksdlaksmd");

  return (
    <header className="App-header">
      {arrayHeaders.map((header) => {
        return (
          <div>
            {header.pageName} {header.number}
          </div>
        );
      })}
    </header>
  );
}

export default AppHeader;

// test(10, 20)

// function test ( x, y ) {
//     return `
//         <div>
//             Gia tri cua X: ${x}
//             Gia tri cua Y: ${y}
//         </div>
//     `
// }

// let array = [1, 4, 3, 6]
// array.map(function(item) {
//     return item + 2;
// })

// array.map(item => item + 2)
