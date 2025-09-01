import { Chart as ChartJS } from "chart.js/auto";
import { Bar,Doughnut,Line } from "react-chartjs-2";

export default function ChartServ(){

    return(
        <div className="bg-white flex ">
            <span className="bg-white h-60">
        <Bar
            data={{
                labels:["A","B","C"],

                datasets:[
                    {
                        label:"revenue",
                        data:[200,100,300]
                    },
                    
                    {
                        label:"loss",
                        data:[40,80,60]
                    }
                ]
            }}
            
        />
        </span>
        <span className="bg-white h-60">
        <Doughnut
             data={{
                labels:["A","B","C"],

                datasets:[
                    {
                        label:"revenue",
                        data:[200,100,300]
                    },
                    
                    {
                        label:"loss",
                        data:[40,80,60]
                    }
                ]
            }}
        />
        </span>
            <span className="bg-white h-60">
        <Line
             data={{
                labels:["A","B","C"],

                datasets:[
                    {
                        label:"revenue",
                        data:[200,100,300]
                    },
                    
                    {
                        label:"loss",
                        data:[40,80,60]
                    }
                ]
            }}
        />
        </span>
        </div>
        
    );

}