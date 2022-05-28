import { useState } from "react";
import DataTable from "react-data-table-component";
import { SpinnerCircular } from "spinners-react";
import HeatMap from "react-heatmap-grid";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isResult, setIsResult] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [website, setWebsite] = useState("");
  const [onlyTitle, setOnlyTitle] = useState(false);

  const xLabels = ["Polaris.com", "BRB.com", "Tesla.com", "Google.com"];
  const yLabels = ["Clean Energy", "Hydrogen", "Clean Energy,Hydrogen"];
  const data = new Array(yLabels.length).fill(0).map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 10 + 1)));

  const columns = [
    {
      name: "COMPANIES",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "CONTEXT",
      selector: (row) => row.context,
      sortable: true,
    },
    {
      name: "QUESTION",
      selector: (row) => row.question,
      sortable: true,
    },
    {
      name: "RESULT URL",
      selector: (row) => row.url,
      sortable: true,
    },
    {
      name: "TITLE",
      selector: (row) => row.title,
      sortable: true,
    },
  ];

  const tableData = [
    {
      id: 1,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 2,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 3,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 4,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 5,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 6,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 7,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 8,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 9,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 10,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 11,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
  ];

  const reset = (item) => {
    setContext("");
    setQuestion("");
    setWebsite("");
    setOnlyTitle(false);
    setIsResult(false);
  };

  const search = () => {
    setSpinner(true);
    setTimeout(function () {
      setIsResult(true);
      setSpinner(false);
    }, 1000);
  };

  return (
    <div className="App">
      <div className="spinner">
        <SpinnerCircular enabled={spinner} size={100} thickness={100} color="#5C7AAA" secondaryColor="#143975" />
      </div>
      <div className="container">
        <div className={isResult ? "row row-first" : "row"}>
          <div className="col">
            <form>
              <div className="form-group">
                <label htmlFor="context" className="lbl">
                  Context(s)
                </label>
                <textarea
                  id="context"
                  className="form-control _textarea"
                  placeholder="Enter here"
                  onChange={(e) => {
                    setContext(e.target.value);
                  }}
                  rows="3"
                  value={context}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="question" className="lbl">
                  Questions
                </label>
                <textarea
                  id="question"
                  className="form-control _textarea"
                  placeholder="Enter here"
                  onChange={(e) => {
                    setQuestion(e.target.value);
                  }}
                  rows="3"
                  value={question}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="website" className="lbl">
                  Companies/Websites
                </label>
                <textarea
                  id="website"
                  className="form-control _textarea"
                  placeholder="Enter here"
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                  rows="3"
                  value={website}
                ></textarea>
              </div>

              <div className="form-group">
                <input type="checkbox" className="form-check-input cb" id="onlyTitle" />
                <label className="form-check-label lbl lbl-cb" htmlFor="onlyTitle">
                  Only search webpage titles
                </label>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label lbl" htmlFor="onlyTitle">
                      Select Market <span className="lbl-cb">(Optional)</span>
                    </label>
                    <select className="form-control form-select">
                      <option>--- Select market ---</option>
                      <option value="Polaris.com">Polaris.com</option>
                      <option value="BRB.com">BRB.com</option>
                      <option value="Tesla.com">Tesla.com</option>
                      <option value="Google.com">Google.com</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <p className="search_btn" onClick={() => search()}>
                      Search
                    </p>
                    <p className="reset_btn" onClick={() => reset()}>
                      RESET
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {isResult && (
          <div className="row row-second">
            <div className="col-6">
              <div className="row">
                <div className="col-1">
                  <center className="lbl_heatmap lbl_left">Context& Questions</center>
                </div>
                <div className="col-11">
                  <div className="row">
                    <div className="col-12">
                      <center className="lbl_heatmap lbl_top">Companies/Websites</center>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <HeatMap
                        xLabels={xLabels}
                        yLabels={yLabels}
                        data={data}
                        yLabelWidth={180}
                        yLabelTextAlign={"left"}
                        cellRender={(value) => value && `${value}`}
                        cellStyle={(background, value, min, max, data, x, y) => ({
                          background: `rgba(66, 86, 244, ${1 - (max - value) / (max - min)})`,
                          fontSize: "14px",
                          color: "white",
                          margin: "5px",
                          borderRadius: "5px",
                          border: "1px solid #blue !important",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              ,
            </div>
            <div className="col-6">
              <DataTable columns={columns} data={tableData} pagination defaultSortFieldId={1} selectableRows />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
