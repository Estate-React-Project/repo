/* eslint-disable */
const makeAptListData = (data) => 
{
    const resp = {
        columns: [
            { Header: "aptname", accessor: "aptname", width: "40%", align: "left" },
            { Header: "gu", accessor: "gu", align: "left" },
            { Header: "dong", accessor: "dong", align: "center" },
        ],
        rows: data ? data.map((d) => {
            return {
                aptname: d.aptNm,
                gu: d.adresGu,
                dong: d.adresDong,
            }
         })
         :
         []
    };
    return resp;
};

export default makeAptListData;
