import { useEffect, useState } from "react";

const Main = () => {
  const [value, setValue] = useState("0");
  const addnumber = (number) => {
    if (number === ".") {
      setValue(value + ".");
      return;
    }
    if (value === "0") {
      setValue(`${number}`);
    } else {
      setValue((`${value}` + `${number}`).slice(0, 15));
    }
  };
  const [prevalue, setprevalue] = useState("");
  const zero = () => {
    setprevalue("");
  };
  useEffect(() => {
    if (prevalue == "0") {
      zero();
    }
  }, [prevalue, value]);
  const [current, setcurrent] = useState("");
  if (value == "Infinity") {
    setValue("Cannot Divide By 0");
  }

  return (
    <div className="container mx-auto">
      <div className=" flex justify-center animate-enter">
        <div className=" shad animate-color">
          <div className="w-[300px] h-[100px] relative border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#050e18] rounded-t-md">
            <div className="current absolute font-square text-[#4555679d] top-[20px] left-[20px] text-xl">
              {current}
            </div>
            <div className="absolute previous text-right w-full pr-[20px] pl-[30px] font-square text-sm top-[15px] text-[#4555679d]">
              {prevalue}
            </div>
            <div className="input text-2xl text-right items-center font-square absolute bottom-[20px] w-full px-[20px] overflow-hidden">
              {value}
            </div>
          </div>
          <div className=" grid grid-cols-4 w-[300px] font-square">
            <button
              onClick={(e) => {
                setValue("0");
                setprevalue("");
                setcurrent("");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] focus:bg-[#12273b]}"
            >
              AC
            </button>
            <button
              onClick={(e) => {
                e.target.blur();
                if (value == "0") {
                  return;
                }
                setValue(-value);
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] focus:bg-[#12273b]"
            >
              +/-
            </button>
            <button
              onClick={(e) => {
                setValue(value / 100);
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] focus:bg-[#12273b]"
            >
              %
            </button>
            <button
              onClick={(e) => {
                if (prevalue === "") {
                  setprevalue(value);
                  setValue("0");
                } else {
                  setprevalue(`${parseFloat(prevalue) / parseFloat(value)}`);
                }
                setcurrent("÷");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center text-xl border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] focus:bg-[#12273b]"
            >
              ÷
            </button>
            <button
              onClick={(e) => {
                addnumber("7");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b]"
            >
              7
            </button>
            <button
              onClick={(e) => {
                addnumber("8");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b]"
            >
              8
            </button>
            <button
              onClick={(e) => {
                addnumber("9");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b]"
            >
              9
            </button>
            <button
              onClick={(e) => {
                if (prevalue === "") {
                  setprevalue(value);
                  setValue("0");
                } else {
                  setprevalue(`${parseFloat(prevalue) * parseFloat(value)}`);
                }
                setcurrent("x");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] focus:bg-[#12273b]"
            >
              X
            </button>
            <button
              onClick={(e) => {
                addnumber("4");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b]"
            >
              4
            </button>
            <button
              onClick={(e) => {
                addnumber("5");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b]"
            >
              5
            </button>
            <button
              onClick={(e) => {
                addnumber("6");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b]"
            >
              6
            </button>
            <button
              onClick={(e) => {
                if (prevalue === "") {
                  setprevalue(value);
                  setValue("0");
                } else {
                  setprevalue(`${parseFloat(prevalue) - parseFloat(value)}`);
                }
                setcurrent("-");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center text-xl border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] focus:bg-[#12273b]"
            >
              -
            </button>
            <button
              onClick={(e) => {
                addnumber("1");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b]"
            >
              1
            </button>
            <button
              onClick={(e) => {
                addnumber("2");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b]"
            >
              2
            </button>
            <button
              onClick={(e) => {
                addnumber("3");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b]"
            >
              3
            </button>
            <button
              onClick={(e) => {
                let g = prevalue;
                if (prevalue === "") g = 0;
                setprevalue(`${parseFloat(g) + parseFloat(value)}`);
                setValue("0");
                setcurrent("+");
                e.target.blur();
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center text-xl border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] focus:bg-[#12273b]"
            >
              +
            </button>
            <button
              onClick={(e) => {
                e.target.blur();
                if (value == "0") {
                  return;
                }
                addnumber("00");
              }}
              className=" rounded-bl-md w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b] "
            >
              00
            </button>
            <button
              onClick={(e) => {
                console.log(e.target);
                e.target.blur();
                if (value == "0") {
                  return;
                }
                addnumber("0");
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] number focus:bg-[#12273b]"
            >
              0
            </button>
            <button
              onClick={(e) => {
                e.target.blur();
                if (value.includes(".")) {
                  return;
                }
                addnumber(".");
              }}
              className=" w-[75px] h-[75px] items-center flex justify-center text-2xl border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a] focus:bg-[#12273b]"
            >
              .
            </button>
            <button
              onClick={(e) => {
                e.target.blur();
                if (current == "x") {
                  parseFloat(prevalue) * parseFloat(value)
                    ? setValue(
                        `${parseFloat(
                          parseFloat(prevalue) * parseFloat(value).toFixed(15)
                        )}`
                      )
                    : setValue("0");
                } else if (current == "+") {
                  parseFloat(prevalue) + parseFloat(value)
                    ? setValue(
                        `${parseFloat(
                          (parseFloat(prevalue) + parseFloat(value)).toFixed(15)
                        )}`
                      )
                    : setValue("0");
                } else if (current == "-") {
                  parseFloat(prevalue) - parseFloat(value)
                    ? setValue(
                        `${parseFloat(
                          parseFloat(prevalue) - parseFloat(value).toFixed(15)
                        )}`
                      )
                    : setValue("0");
                } else if (current == "÷") {
                  prevalue / value
                    ? setValue(
                        `${parseFloat(
                          parseFloat(prevalue) / parseFloat(value).toFixed(15)
                        )}`
                      )
                    : setValue("0");
                } else {
                  setValue(value);
                }
                setcurrent("");
                setprevalue("");
              }}
              className=" rounded-br-md w-[75px] h-[75px] items-center flex justify-center text-xl border-[0.3px] border-[rgba(120,180,239,0.171)] text-[#6885A7] bg-[#091623] hover:bg-[#0c1b2a]"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
