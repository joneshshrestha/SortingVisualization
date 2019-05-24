let value = []
let i = 0
let w = 10

function setup() {
    createCanvas(800, 200);                           // CreateCanvas(width, height) 
    values = new Array(floor(width / w));             // Creates an array of length 80 but without any elements in the array
    for (let i = 0; i < values.length; i++) {         // While i < 80 runs the loop
        values[i] = random(height);                   // Fill the array with random heights (0 < height < 200 )
    }
    frameRate(5)
}

function draw() {
    background(51);

    for (let i = 0; i < values.length; i++) {         
        stroke(0)                                     // Black border of rectangle
        fill(255)                                     // White fill inside the rectangle
        rect(i * w, height - values[i], w, values[i]) // rect(x, y, width, height)
    }
}

function swap(arr, a, b) {
    let temp = arr[a]                                 
    arr[a] = arr[b]
    arr[b] = temp
}