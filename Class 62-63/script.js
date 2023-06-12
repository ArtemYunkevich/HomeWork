'use strict'

window.addEventListener('load', () => {
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    let getDefaultSetup = () => {
        // canvas visual settings
        ctx.fillStyle = 'yellow';
        ctx.strokeStyle = 'cyan';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';

        // canvas effects settings
        ctx.translate(canvas.width / 2, canvas.height / 2);

    }

    getDefaultSetup();


    // variables

    let maxIters = 1; // есть в рандомизаторе
    let scaleFactor = -0.7; 
    let rotateFactor = Math.PI * 0.25;
    let lineSize = 200; // есть в рандомизаторе
    let translateFactor = lineSize / 2;
    let branches = 1; // есть в рандомизаторе

    // inputs creation

    let rangeContainer = document.querySelector('.range-container');
    let maxItersRangeContainer = document.querySelector('.max-iters-container');
    let scaleFactorRangeContainer = document.querySelector('.scale-factor-container');
    let branchesRangeContainer = document.querySelector('.branches-container');
    let lineSizeRangeContainer = document.querySelector('.line-size-container');
    let rotateFactorRangeContainer = document.querySelector('.rotate-factor-container');

    //

    let maxItersRange = document.createElement('input');
    maxItersRange.setAttribute('type', 'range');
    maxItersRange.setAttribute('id', 'maxIters');
    maxItersRange.setAttribute('min', '0');
    maxItersRange.setAttribute('max', '4');
    maxItersRange.setAttribute('step', '1');
    maxItersRange.setAttribute('value', '0');

    maxItersRangeContainer.appendChild(maxItersRange);
    let maxItersRangeLabel = document.createElement('label');
    maxItersRangeLabel.setAttribute('for', 'maxIters');
    maxItersRangeLabel.innerText = 'Iterations chosen: '
    maxItersRangeContainer.appendChild(maxItersRangeLabel);

    let maxItersRangeOutput = document.createElement('output');
    maxItersRangeOutput.setAttribute('id', 'maxItersOutput');
    maxItersRangeOutput.textContent = maxItersRange.value;
    maxItersRangeContainer.appendChild(maxItersRangeOutput);

    //

    let scaleFactorRange = document.createElement('input');
    scaleFactorRange.setAttribute('type', 'range');
    scaleFactorRange.setAttribute('id', 'scaleFactor');
    scaleFactorRange.setAttribute('min', '-0.7');
    scaleFactorRange.setAttribute('max', '0.7');
    scaleFactorRange.setAttribute('step', '0.1');
    scaleFactorRange.setAttribute('value', '-0.7');
    scaleFactorRangeContainer.appendChild(scaleFactorRange);

    let scaleFactorRangeLabel = document.createElement('label');
    scaleFactorRangeLabel.setAttribute('for', 'scaleFactor');
    scaleFactorRangeLabel.innerText = 'Scale chosen: '
    scaleFactorRangeContainer.appendChild(scaleFactorRangeLabel);

    let scaleFactorRangeOutput = document.createElement('output');
    scaleFactorRangeOutput.setAttribute('id', 'scaleFactorOutput');
    scaleFactorRangeOutput.textContent = scaleFactorRange.value;
    scaleFactorRangeContainer.appendChild(scaleFactorRangeOutput);

    //

    let branchesRange = document.createElement('input');
    branchesRange.setAttribute('type', 'range');
    branchesRange.setAttribute('id', 'branches');
    branchesRange.setAttribute('min', '1');
    branchesRange.setAttribute('max', '20');
    branchesRange.setAttribute('step', '1');
    branchesRange.setAttribute('value', '1');
    branchesRangeContainer.appendChild(branchesRange);

    let branchesRangeLabel = document.createElement('label');
    branchesRangeLabel.setAttribute('for', 'branches');
    branchesRangeLabel.innerText = 'Branches chosen: '
    branchesRangeContainer.appendChild(branchesRangeLabel);

    let branchesRangeOutput = document.createElement('output');
    branchesRangeOutput.setAttribute('id', 'branchesRangeOutput');
    branchesRangeOutput.textContent = branchesRange.value;
    branchesRangeContainer.appendChild(branchesRangeOutput);

    //

    let lineSizeRange = document.createElement('input');
    lineSizeRange.setAttribute('type', 'range');
    lineSizeRange.setAttribute('id', 'lineSize');
    lineSizeRange.setAttribute('min', '50');
    lineSizeRange.setAttribute('max', '400');
    lineSizeRange.setAttribute('step', '1');
    lineSizeRange.setAttribute('value', '200');
    lineSizeRangeContainer.appendChild(lineSizeRange);

    let lineSizeRangeLabel = document.createElement('label');
    lineSizeRangeLabel.setAttribute('for', 'lineSize');
    lineSizeRangeLabel.innerText = 'Line size chosen: '
    lineSizeRangeContainer.appendChild(lineSizeRangeLabel);

    let lineSizeRangeOutput = document.createElement('output');
    lineSizeRangeOutput.setAttribute('id', 'lineSizeRangeOutput');
    lineSizeRangeOutput.textContent = lineSizeRange.value;
    lineSizeRangeContainer.appendChild(lineSizeRangeOutput);

    //

    let rotateFactorRange = document.createElement('input');
    rotateFactorRange.setAttribute('type', 'range');
    rotateFactorRange.setAttribute('id', 'rotateFactor');
    rotateFactorRange.setAttribute('min', '0');
    rotateFactorRange.setAttribute('max', '3.15');
    rotateFactorRange.setAttribute('step', '0.01');
    rotateFactorRange.setAttribute('value', '0.25');
    rotateFactorRangeContainer.appendChild(rotateFactorRange);

    let rotateFactorRangeLabel = document.createElement('label');
    rotateFactorRangeLabel.setAttribute('for', 'rotateFactor');
    rotateFactorRangeLabel.innerText = 'Rotate factor chosen: '
    rotateFactorRangeContainer.appendChild(rotateFactorRangeLabel);

    let rotateFactorRangeOutput = document.createElement('output');
    rotateFactorRangeOutput.setAttribute('id', 'rotateFactorRangeOutput');
    rotateFactorRangeOutput.textContent = rotateFactorRange.value;
    rotateFactorRangeContainer.appendChild(rotateFactorRangeOutput);

    //

    let randomizeAllValues = document.createElement('input');
    randomizeAllValues.setAttribute('type', 'button');
    randomizeAllValues.setAttribute('value', 'Randomize!');
    rangeContainer.appendChild(randomizeAllValues);

    // draw functions 
    let drawFigure = (level) => {

        if (level > maxIters) return;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(lineSize, 0);
        ctx.stroke();

        ctx.save();

        ctx.translate(translateFactor, 0);
        ctx.rotate(rotateFactor);
        ctx.scale(scaleFactor, scaleFactor);
        drawFigure(level + 1);

        ctx.restore();

        ctx.save();

        ctx.translate(translateFactor / 2, 0);
        ctx.rotate(rotateFactor);
        ctx.scale(scaleFactor, scaleFactor);
        drawFigure(level + 1);

        ctx.restore();

        ctx.save();

        ctx.translate(translateFactor, 0);
        ctx.rotate(-rotateFactor);
        ctx.scale(scaleFactor, scaleFactor);
        drawFigure(level + 1);

        ctx.restore();

        ctx.save();

        ctx.translate(translateFactor / 2, 0);
        ctx.rotate(-rotateFactor);
        ctx.scale(scaleFactor, scaleFactor);
        drawFigure(level + 1);

        ctx.restore();
    }

    let drawComplexFigure = () => {
        for (let i = 0; i < branches; i++) {
            ctx.rotate(Math.PI * 2 / branches)
            drawFigure(0);
        }
    }

    // input events
    drawComplexFigure();

    // max iters change

    maxItersRange.addEventListener('input', (event) => {
        maxItersRangeOutput.textContent = event.target.value;
        maxIters = event.target.value;
    })

    maxItersRange.addEventListener('change', (event) => {
        ctx.reset();
        getDefaultSetup();
        maxIters = event.target.value;
        drawComplexFigure();
    })

    scaleFactorRange.addEventListener('input', (event) => {
        scaleFactorRangeOutput.textContent = event.target.value;
        scaleFactor = event.target.value;
    })

    scaleFactorRange.addEventListener('change', (event) => {
        ctx.reset();
        getDefaultSetup();
        scaleFactor = event.target.value;
        drawComplexFigure();
    })

    branchesRange.addEventListener('input', (event) => {
        branchesRangeOutput.textContent = event.target.value;
        branches = event.target.value;
    })

    branchesRange.addEventListener('change', (event) => {
        ctx.reset();
        getDefaultSetup();
        branches = event.target.value;
        drawComplexFigure();
    })

    lineSizeRange.addEventListener('input', (event) => {
        lineSizeRangeOutput.textContent = event.target.value;
        lineSize = event.target.value;
    })

    lineSizeRange.addEventListener('change', (event) => {
        ctx.reset();
        getDefaultSetup();
        lineSize = event.target.value;
        drawComplexFigure();
    })

    rotateFactorRange.addEventListener('input', (event) => {
        rotateFactorRangeOutput.textContent = event.target.value;
        rotateFactor = event.target.value;
    })

    rotateFactorRange.addEventListener('change', (event) => {
        ctx.reset();
        getDefaultSetup();
        rotateFactor = event.target.value;
        drawComplexFigure();
    })

    // randomizer

    randomizeAllValues.addEventListener('click', () => {
        ctx.reset();
        getDefaultSetup();

        maxIters = Math.trunc(Math.random() * 5);
        maxItersRange.setAttribute('value', maxIters);
        maxItersRangeOutput.textContent = maxIters;

        lineSize = Math.trunc(Math.random() * 400);
        lineSizeRange.setAttribute('value', lineSize);
        lineSizeRangeOutput.textContent = lineSize;

        branches = Math.trunc(Math.random() * 20 + 1);
        branchesRange.setAttribute('value', branches);
        branchesRangeOutput.textContent = branches;

        scaleFactor = ((Math.random() * 14 - 7) / 10);
        scaleFactorRange.setAttribute('value', scaleFactor);
        scaleFactorRangeOutput.textContent = Math.trunc(scaleFactor * 10) / 10;

        rotateFactor = Math.PI * Math.random();
        rotateFactorRange.setAttribute('value', rotateFactor);
        rotateFactorRangeOutput.textContent = Math.trunc(rotateFactor * 100) / 100;

        ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

        drawComplexFigure();
    })
})