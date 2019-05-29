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
    quickSort(values, 0, values.length - 1)           // Passed array, start = 0, end = arrayLength-1
}

function quickSort(arr, start, end) {                 // Recursive quickSort algorithm
    if (start >= end) {                               // If array has more than 1 element than proceed to function else end the function
        return
    }
    let index = partition(arr, start, end)            // 
    quickSort(arr, start, index - 1)                  // Performs quickSort from 0 to 
    quickSort(arr, index + 1, end) 
}

function partition(arr, start, end) {                 
    let pivotIndex = start                            // pivotIndex = 0
    let pivotValue = arr[end]                         // pivotValue = value of last element in the array
    for (let i = start; i < end; i++) {               // Runs loop from 0 to end of the array
        if (arr[i] < pivotValue) {                    // If array value at position i < last array value then
            swap(arr, i, pivotIndex)                  // Swap array value at i and array value at pivotIndex 
            pivotIndex++                              
        }
    }
    swap(arr, pivotIndex, end)                        // Swap latest array value at pivotIndex and end value of the array 
    return pivotIndex                                 // Return the sorted value
}

function draw() {
    background(51);

    for (let i = 0; i < values.length; i++) {         
        stroke(0)                                     // Black border of rectangle
        fill(255)                                     // White fill inside the rectangle
        rect(i * w, height - values[i], w, values[i]) // rect(x, y, width, height)
    }
}

function swap(arr, a, b) {                            // Swap function
    let temp = arr[a]                                 
    arr[a] = arr[b]
    arr[b] = temp
}