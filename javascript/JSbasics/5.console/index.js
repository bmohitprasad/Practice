console.info('%cThis is a styled info message!', 'color: blue; font-size: 16px; font-weight: bold;');

function a() {
    b()
}
function b() {
    c()
}
function c() {
    console.trace()
}
a()