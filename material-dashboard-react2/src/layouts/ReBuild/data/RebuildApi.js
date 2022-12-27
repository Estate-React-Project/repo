/* eslint-disable react/jsx-no-undef */
import React from "react";
import axios from "axios";
import AuthorsTableData from "./data/authorsTableData";

class RebuildApi extends React.Component{
    state = {
        data:[],
        
      };
    getAuthorsTableData(){
        const url = `http://openapi.seoul.go.kr:8088/505550474a6761723732697a715362/json/CleanupBussinessInfo/1/5/종로구`;
        
        // console.log(url);
        axios.get(url).then((response) => {
            // console.log(response.data.CleanupBussinessInfo.row);
            
            this.setState({
                isLoading: false,
                data:response.data.CleanupBussinessInfo.row
              });
        });
    }
    componentDidMount(){
        this.getAuthorsTableData();
    }
    render(){
        const { isLoading,data} = this.state;
        
        return(
<row className="container">
            {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
          <div className="rebuildInfo">
            {data&&data.map((d,cnt)=>{
            return(<Rebuild
                KEY={data[cnt].KEY}
                TYPE={data[cnt].TYPE}
                SERVICE={data[cnt].SERVICE}
                START_INDEX={data[cnt].START_INDEX}
                END_INDEX={data[cnt].END_INDEX}
                GU_NM={data[cnt].GU_NM}
                BJDON_NM={data[cnt].BJDON_NM}
                BSNS_PK={data[cnt].BSNS_PK}
                BTYP_NM={data[cnt].BTYP_NM}
                REPRSNT_JIBUN={data[cnt].REPRSNT_JIBUN}
                CAFE_STTUS={data[cnt].CAFE_STTUS}
                ZONE_AR={data[cnt].ZONE_AR}
                TOTAR={data[cnt].TOTAR}
                BILDNG_HG={data[cnt].BILDNG_HG}
                BILDNG_GROUND_FLOOR_CO={data[cnt].BILDNG_GROUND_FLOOR_CO}
                BILDNG_UNDGRND_FLOOR_CO={data[cnt].BILDNG_UNDGRND_FLOOR_CO}
                SUM_BILDNG_CO={data[cnt].SUM_BILDNG_CO}
                LOCIMG01={data[cnt].LOCIMG01}
                LOCIMG02={data[cnt].LOCIMG02}
                LOCIMG03={data[cnt].LOCIMG03}
                />)
            })}
          </div>
        )}               
      </row>
        )
        }   
    }
export default RebuildApi;