let div=document.getElementById('div')
div.innerHTML=`
<div class=" mt-4 card container border border-secondary" style="width: 18rem;">
        <div class="row align-items-left border border-secondary border-top-0 border-start-0 border-end-0 p-1 text-start">
            Standard Calculator
        </div>

        <div id="buttonsDiv">
            <div class="p2">
                <input type="text" class="row align-items-center border border-secondary border-top-0 border-start-0 border-end-0 border-bottom-0 text-end" style="height: 2rem;  width: 110%;" id="equation" disabled="disabled" readonly="">
                <input type="text" class="row align-items-center border border-secondary border-top-0 border-start-0 border-end-0 text-end" style="height: 2rem; width: 109%;" id="input" placeholder="0">
            </div>

            <div class="p1">
                <div class=" row align-items-center">
                    <button type="button" class="btn btn-light col border m-1" >(</button>
                    <button type="button" class="btn btn-light col border m-1">)</button>

                    <button type="button" class="btn btn-danger col border m-1">CE</button>

                    <button type="button" class="btn btn-danger col m-1 border">C</button>
                </div>
                <div class="row align-items-center">
                    <button type="button" class="btn btn-secondary col border m-1"onClick="display('7')">7</button>
                    <button type="button" class="btn btn-secondary col border m-1">8</button>
                    <button type="button" class="btn btn-secondary col border m-1">9</button>
                    <button type="button" class="btn btn-light col m-1 border">x</button>
                </div>
                <div class="row align-items-center">
                    <button type="button" class="btn btn-secondary col border m-1">4</button>
                    <button type="button" class="btn btn-secondary col border m-1">5</button>
                    <button type="button" class="btn btn-secondary col border m-1">6</button>
                    <button type="button" class="btn btn-light col border m-1">-</button>
                </div>
                <div class="row align-items-center">
                    <button type="button" class="btn btn-secondary col border m-1">1</button>
                    <button type="button" class="btn btn-secondary col border m-1">2</button>
                    <button type="button" class="btn btn-secondary col border m-1">3</button>
                    <button type="button" class="btn btn-light col border m-1">+</button>
                </div>
                <div class="row align-items-center">
                    <button type="button" class="btn btn-secondary col border m-1">.</button>
                    <button type="button" class="btn btn-secondary col border m-1">0</button>
                    <button type="button" class="btn btn-secondary col border m-1">/</button>
                    <button type="button" class="btn btn-primary col border m-1">=</button>
                </div>
            </div>
        </div>
        
    </div>
`
let result=getElementById('result');
function display(num){
    result.value += num;
}