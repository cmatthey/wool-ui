import React, { Component } from "react";
import DataGrid from "react-data-grid";
import "react-data-grid/dist/react-data-grid.css";
import Service from "../services/service";
const service = new Service();

class Volunteer extends Component {
  state = {
    name: "",
    group: "",
    data: [],
    columns: [
      { key: "id", name: "#" },
      { key: "name", name: "Name" },
      { key: "group", name: "Group" },
      { key: "created", name: "Created" },
    ],
  };
  handleDeleteAll = async () => {
    try {
      const data = await service.delete_all_volunteers();
      console.log("Volunteers data is successfully deleted. ", data);
      this.setState({ data });
    } catch (error) {
      console.log(error);
    }
  };
  handleAdd = async () => {
    console.log("", this.state.name, this.state.group);
    const data = await service.add_volunteer(this.state.name, this.state.group);
    console.log("Volunteer is added ", data);
    try {
      const data = await service.get_all_volunteers();
      console.log("All volunteers ", data);
      this.setState({ data });
    } catch (error) {
      console.log(error);
    }
  };
  async componentDidMount() {
    try {
      const data = await service.get_all_volunteers();
      data ? this.setState({ data }) : this.setState({ data: [] });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>Wool UI - A sample React app for the Heroku setup</h1>
        <div>
          <button
            onClick={this.handleDeleteAll}
            className="btn btn-primary btn-sm m-2"
          >
            Delete All
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="volunteer name"
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          ></input>
          <input
            type="text"
            placeholder="group"
            onChange={(event) => {
              this.setState({ group: event.target.value });
            }}
          ></input>
          <button
            onClick={this.handleAdd}
            className="btn btn-primary btn-sm m-2"
          >
            Add
          </button>
        </div>
        <DataGrid
          columns={this.state.columns}
          rows={this.state.data}
          isScrolling={true}
        ></DataGrid>
      </React.Fragment>
    );
  }
}
export default Volunteer;
