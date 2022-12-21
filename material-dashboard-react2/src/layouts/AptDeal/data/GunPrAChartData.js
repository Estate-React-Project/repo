/* eslint-disable */
const makeGunPrAChartData = (data) => 
{
    const resp = {
        labels: data.map((d) => d.adresDong + "(" + d.gunA + "건)"),
        datasets: [
            {
                label: "평균 거래가",
                color: "dark",
                data: data.map((d) => d.prA),
            }
        ],
    };
    return resp;
};

export default makeGunPrAChartData;
