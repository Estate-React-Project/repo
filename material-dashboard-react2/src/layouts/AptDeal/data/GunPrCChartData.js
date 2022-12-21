/* eslint-disable */
const makeGunPrCChartData = (data) => 
{
    const resp = {
        labels: data.map((d) => d.adresDong + "(" + d.gunC + "건)"),
        datasets: [
            {
                label: "평균 거래가",
                color: "dark",
                data: data.map((d) => d.prC),
            }
        ],
    };
    return resp;
};

export default makeGunPrCChartData;