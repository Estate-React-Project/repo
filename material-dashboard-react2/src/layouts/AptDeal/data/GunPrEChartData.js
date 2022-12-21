/* eslint-disable */
const makeGunPrEChartData = (data) => 
{
    const resp = {
        labels: data.map((d) => d.adresDong + "(" + d.gunE + "건)"),
        datasets: [
            {
                label: "평균 거래가",
                color: "dark",
                data: data.map((d) => d.prE),
            }
        ],
    };
    return resp;
};

export default makeGunPrEChartData;