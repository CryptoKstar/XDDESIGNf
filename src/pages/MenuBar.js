
const buttons = [
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/one", src: "static/image/button1_1.png", backgroundcolor: "#036473" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/two", src: "static/image/button2_2.png", backgroundcolor: "#d1313d" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/three", src: "static/image/button3_3.png", backgroundcolor: "#21bf73" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/four", src: "static/image/button4_4.png", backgroundcolor: "#cb0671" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/five", src: "static/image/button5_5.png", backgroundcolor: "#524641" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/six", src: "static/image/button7_7.png", backgroundcolor: "#fcb038" },
  { label: "להטבות", label1: "`<<`", label2: "בנתניה", href: "/seven", src: "static/image/button6_6.png", backgroundcolor: "#fc5e00" },
]
export default function MenuBar({ flag }) {
  return (
    <>
      {
        buttons.map((item, key) => {
          if (flag === key) {
            return (
              <div key={key}>
                <div style={{ display: "inline-flex", float: "right", width: "13vw", color: "white" }}>
                  <div className="hoveredParent1">
                    <a href="/one">
                      <div className="hovered" style={{ backgroundColor: item.backgroundcolor, fontSize: "0.7vw", color: "white", fontWeight: "bolder" }} >
                        <label>להטבות</label><br />
                        <label >בנתניה{`>>`}</label><br />
                        <label >לצאת מהעיר, ולהישאר בה</label>
                      </div>
                    </a>
                  </div>
                  <a href={item.href}><img alt="prop" src={item.src}></img></a>
                </div>
              </div>
            )
          }
          else {
            return (
              <div key={key}>
                <div className="buttonhoverd" style={{ display: "inline-flex", width: "13vw", float: "right", color: "white" }}>
                  <div className="hoveredParent1">
                    <a href={item.href}>
                      <div className="hovered" style={{ backgroundColor: item.backgroundcolor, fontSize: "0.7vw", color: "white", fontWeight: "bolder", direction: "rtl" }} >
                        <label>להטבות</label><br />
                        <label >בנתניה{`>>`}</label><br />
                        <label>לצאת מהעיר, ולהישאר בה</label>
                      </div>
                    </a>
                  </div>
                  <a href={item.href}><img alt="prop" src={item.src}></img></a>
                </div>
              </div>
            )
          }
        })
      }
    </>
  );
}
