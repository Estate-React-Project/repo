/* eslint-disable */
const makeGunPrDChartData = (data) => 
{
    const resp = {
        labels: data.map((d) => d.adresDong + "(" + d.gunD + "건)"),
        datasets: [
            {
                label: "평균 거래가",
                color: "dark",
                data: data.map((d) => d.prD),
            }
        ],
    };
    return resp;
};

export default makeGunPrDChartData;
