/* eslint-disable */
const makeGunPrBChartData = (data) => 
{
    const resp = {
        labels: data.map((d) => d.adresDong + "(" + d.gunB + "건)"),
        datasets: [
            {
                label: "평균 거래가",
                color: "dark",
                data: data.map((d) => d.prB),
            }
        ],
    };
    return resp;
};

export default makeGunPrBChartData;
