// export default function () {
//   return <h1>I'm sending the Tesla car.</h1>;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Tesla() {
  return <h1>I'm sending the Tesla car.</h1>;
}
export default Tesla;
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Apple() {
  return <h1>I'm sending macBook.</h1>;
}

function Windows() {
  return <h1>I'm sending Windows.</h1>;
}

export { Apple, Windows };

// export { Windows as Microsoft };
// export function Apple() {
//   return <h1>I'm sending macBook.</h1>;
// }

// export function Windows() {
//   return <h1>I'm sending Windows.</h1>;
// }

// const a = 10,
//   b = 20,
//   c = 30;

// export { Apple, Windows, a, b, c };
