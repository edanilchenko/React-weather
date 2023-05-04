import React from "react";

function Donut({title = '', persentage = 0}){
    var r = 50;
	var c = Math.PI*(r*2);
    var val = persentage;
		
    if (val < 0) { val = 0;}
    if (val > 100) { val = 100;}
    
    var pct = ((100-val)/100)*c;
    
    return (
        <div className="diagram-block">
            <div class="title">{title}</div>
            <div className="donut">
                <svg viewBox="0 0 110 110" fill="#fff" fill-rule="evenodd" stroke="#000" font-family="Roboto" font-size="24" text-anchor="middle">
                    <defs>
                    </defs>
                    <use href="#A" x="5" y="5"/>
                    <symbol id="A" overflow="visible">
                        <circle cx="50" cy="50" stroke="#2196f3" stroke-width="10" stroke-dasharray="2041.8000000000002 3141.6000000000004" fill="none" stroke-opacity=".3" r="50"/>
                        <path d="M50 0c27.7 0 50 22.3 50 50s-22.3 50-50 50S0 77.7 0 50 22.3 0 50 0z" fill="none" stroke-dasharray="314" stroke-dashoffset={pct} stroke="aqua" stroke-width="10"/>
                        <text fill="#fff" stroke="none">
                            <tspan x="50" y="58">
                                {persentage}%
                            </tspan>
                        </text>
                    </symbol>
                </svg>
            </div>
        </div>
    );
}

export default Donut;