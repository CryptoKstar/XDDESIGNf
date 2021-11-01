import { Box, Grid, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import ReactPlayer from 'react-player';
// import { styled } from '@mui/material/styles';

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Grid container>
        <ReactPlayer style={{ position: "relative" }} url="/static/video/2.mp4" playing loop muted width="100%" height="100%" />
        <Grid item style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Grid item style={{ boxShadow: "0px 0px 145px 86px black" }}></Grid>
          <Box height="10%" display="flex" flexDirection="column" alignItems="center" color="#fff" style={{ top: "7px", position: "relative" }}  >
            <Typography style={{ fontSize: "29px" }}>
              פטור ממדד לשכה / הטבה בשינויי דיירים! / ליווי אדריכלי לעיצוב / פטור משכ"טעו"ד / תנאי מימון 20/80 / פטור ממדד לשכה! / ליווי אדריכלי לעיצוב הדירה / הטבה בשיכויי
            </Typography>
          </Box>
          <Box marginTop="27%" display="flex" flexDirection="column" alignItems="center" color="#fff" style={{ backgroundColor: '#232323', boxShadow: "0px -31px 126px 84px rgb(35 35 35)", height: "auto" }}>
            <Grid container>
              <Grid item xs={7} style={{ display: "grid", justifyContent: "right", marginTop: "-2%", paddingRight: "6%" }}>
                <img alt="prop" src="static/image/title1.png"></img>
                <img alt="prop" src="static/image/body1.png"></img>
                <br />
                <br />
                <Typography style={{ textAlign: "right" }}>רוצה לשמוע עוד?מלא פרטים ונחזור אלייך בהקדם</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <div className="input_div">
                    <label className="input_label"><span>:</span>מייל</label>
                    <input className="input_style" type="text"></input>
                  </div>
                  <div className="input_div">
                    <label className="input_label"><span>:</span>שם מלא</label>
                    <input className="input_style" type="text"></input>
                  </div>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <div className="input_div">
                    <label className="input_label"><span>{`<`}</span>פרויקט</label>
                    <input className="input_style" type="text"></input>
                  </div>
                  <div className="input_div">
                    <label className="input_label"><span>:</span>טלפון</label>
                    <input className="input_style" type="text"></input>
                  </div>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} paddingTop={2} spacing={2}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", justifyContent: "space-between" }} spacing={2}>
                    <button style={{ width: "100px", backgroundColor: "#ff1650", border: "none", color: "white", borderTopRightRadius: "15px", fontSize: "25px" }}>שלח</button>
                    <div style={{ display: "inline-block" }}>
                      <label>אני מאשר קבלת מידע שיווקי</label>&nbsp; &nbsp; &nbsp;
                      <input htmlFor="html" type="checkbox" id="html" />
                    </div>
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: "50%", display: "display", direction: "rtl" }} spacing={2}>
                    <img alt="prop" src="static/image/root.png"></img>
                  </Stack>
                </Stack>
                <Typography style={{ justifyContent: "center", marginTop: "5%", paddingBottom: "1%", display: "inline-flex" }}>!<p>ההטבות לחוזים שיחתמו עד ה- 31.12.21 בלבד</p></Typography>
              </Grid>
              <Grid item xs={5} style={{ display: "flex" }} >
                <Stack style={{ width: "40%" }} paddingTop={2} spacing={2}>
                  <div>
                    <div style={{ display: "inline-flex" }}>
                      <div className="hoveredParent"><a href="/one"><img alt="prop" src="static/image/button1.png" /></a>
                        <div className="hovered">
                          <label>להטבות</label><br />
                          <label>{`<<`}</label>
                          <label >בנתניה</label><br />
                          <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                        </div>
                      </div>
                      <img alt="prop" src="static/image/button1_1.png"></img>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "inline-flex" }}>
                      <div className="hoveredParent"><a href="/two"><img alt="prop" src="static/image/2.png" /></a>
                        <div className="hovered" style={{ backgroundColor: "#d1313d" }}>
                          <label>להטבות</label><br />
                          <label>{`<<`}</label>
                          <label >בנתניה</label><br />
                          <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                        </div>
                      </div>
                      <img alt="prop" src="static/image/button2_2.png"></img>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "inline-flex" }}>
                      <div className="hoveredParent"><a href="/three"><img alt="prop" src="static/image/3.png" /></a>
                        <div className="hovered" style={{ backgroundColor: "#21bf73" }}>
                          <label>להטבות</label><br />
                          <label>{`<<`}</label>
                          <label >בנתניה</label><br />
                          <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                        </div>
                      </div>
                      <img alt="prop" src="static/image/button3_3.png"></img>
                    </div>
                  </div>
                </Stack> 
                <Stack style={{ width: "60%", float: "left", display: "flex", marginTop: "-5%" }} spacing={2}>
                  <div>
                    <div style={{ display: "inline-flex" }}>
                      <div className="hoveredParent"><a href="/four"><img alt="prop" src="static/image/7.png" /></a>
                        <div className="hovered" style={{ backgroundColor: "#cb0671" }}>
                          <label>להטבות</label><br />
                          <label>{`<<`}</label>
                          <label >בנתניה</label><br />
                          <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                        </div>
                      </div>
                      <img alt="prop" src="static/image/button4_4.png"></img>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "inline-flex" }}>
                      <div className="hoveredParent"><a href="/five"><img alt="prop" src="static/image/5.png" /></a>
                        <div className="hovered" style={{ backgroundColor: "#524641" }}>
                          <label>להטבות</label><br />
                          <label>{`<<`}</label>
                          <label >בנתניה</label><br />
                          <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                        </div>
                      </div>
                      <img alt="prop" src="static/image/button5_5.png"></img>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "inline-flex" }}>
                      <div className="hoveredParent"><a href="/six"><img alt="prop" src="static/image/6.png" /></a>
                        <div className="hovered" style={{ backgroundColor: "#fcb038" }}>
                          <label>להטבות</label><br />
                          <label>{`<<`}</label>
                          <label >בנתניה</label><br />
                          <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                        </div>
                      </div>
                      <img alt="prop" src="static/image/button7_7.png"></img>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "inline-flex" }}>
                      <div className="hoveredParent"><a href="/seven"><img alt="prop" src="static/image/7.png" /></a>
                        <div className="hovered" style={{ backgroundColor: "#fc5e00" }}>
                          <label>להטבות</label><br />
                          <label>{`<<`}</label>
                          <label >בנתניה</label><br />
                          <label style={{ fontSize: "13px" }}>לצאת מהעיר, ולהישאר בה</label>
                        </div>
                      </div>
                      <img alt="prop" src="static/image/button6_6.png"></img>
                    </div>
                  </div>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid >
    </Page >
  );
}
