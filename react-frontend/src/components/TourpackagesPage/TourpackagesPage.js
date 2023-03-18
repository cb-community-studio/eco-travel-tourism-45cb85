import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Slider } from "primereact/slider";

import AreYouSureDialog from "../common/AreYouSureDialog";
import TourpackagesDatatable from "./TourpackagesDataTable";
import TourpackagesEditDialogComponent from "./TourpackagesEditDialogComponent";
import TourpackagesCreateDialogComponent from "./TourpackagesCreateDialogComponent";
import TourpackagesFakerDialogComponent from "./TourpackagesFakerDialogComponent";
import TourpackagesSeederDialogComponent from "./TourpackagesSeederDialogComponent";

import "../../assets/layout/sass/_tourPackages.scss";

const TourpackagesPage = (props) => {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [showAreYouSureDialog, setShowAreYouSureDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const [showFakerDialog, setShowFakerDialog] = useState(false);
    const [showSeederDialog, setShowSeederDialog] = useState(false);
    const [selectedEntityIndex, setSelectedEntityIndex] = useState();
    useEffect(() => {
        //on mount
        client
            .service("tourpackages")
            .find({ query: { $limit: 100 } })
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Tourpackages", type: "error", message: error.message || "Failed get tourpackages" });
            });
    }, []);

    const onEditRow = (rowData, rowIndex) => {
        setSelectedEntityIndex(rowIndex);
        setShowEditDialog(true);
    };

    const onCreateResult = (newEntity) => {
        setData([...data, newEntity]);
    };
    const onFakerCreateResults = (newEntities) => {
        setData([...data, ...newEntities]);
    };
    const onSeederResults = (newEntities) => {
        setData([...data, ...newEntities]);
    };

    const onEditResult = (newEntity) => {
        let _newData = _.cloneDeep(data);
        _newData[selectedEntityIndex] = newEntity;
        setData(_newData);
    };

    const deleteRow = async () => {
        try {
            await client.service("tourpackages").remove(data[selectedEntityIndex]?._id);
            let _newData = data.filter((_, i) => i !== selectedEntityIndex);
            setData(_newData);
            setSelectedEntityIndex(null);
            setShowAreYouSureDialog(false);
        } catch (error) {
            console.log({ error });
            props.alert({ title: "Tourpackages", type: "error", message: error.message || "Failed delete record" });
        }
    };
    const onRowDelete = (index) => {
        setSelectedEntityIndex(index);
        setShowAreYouSureDialog(true);
    };

    const onRowClick = (e) => {};

    const menuItems = [
        {
            label: "Faker",
            icon: "pi pi-sliders-h",
            command: (e) => {
                setShowFakerDialog(true);
            },
        },
        {
            label: "Seeder",
            icon: "pi pi-forward",
            command: (e) => {
                setShowSeederDialog(true);
            },
        },
    ];

    // country dropdown
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: "Australia", code: "AU" },
        { name: "Brazil", code: "BR" },
        { name: "China", code: "CN" },
        { name: "Egypt", code: "EG" },
        { name: "France", code: "FR" },
        { name: "Germany", code: "DE" },
        { name: "India", code: "IN" },
        { name: "Japan", code: "JP" },
        { name: "Spain", code: "ES" },
        { name: "United States", code: "US" },
    ];

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: "1 day", code: "NY" },
        { name: "2 days", code: "RM" },
        { name: "3 days", code: "LDN" },
        { name: "4 days", code: "IST" },
        { name: "5 days", code: "PRS" },
        { name: "6 days", code: "PRS" },
        { name: "7 days", code: "PRS" },
        { name: "8 days", code: "PRS" },
        { name: "9 days", code: "PRS" },
        { name: "10 days", code: "PRS" },
        { name: "11 days", code: "PRS" },
        { name: "12 days", code: "PRS" },
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: "18px" }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <div>{props.placeholder}</div>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: "18px" }} />
                <div>{option.name}</div>
            </div>
        );
    };

    // slider

    const [value, setValue] = useState([20, 80]);

    return (
        <div className="tourpackages-page">
            <div className="filter-container">
                <div className="filter-content">
                    <div className="filter-row">
                        {/* search by keyword */}
                        <div className="flex justify-content-center">
                            <span className="p-input-icon-right">
                                <i className="pi pi-search mr-4 text-900" />
                                <InputText placeholder="Search by keyword" className="pl-4 w-full md:w-28rem h-full" />
                            </span>
                        </div>

                        {/* country */}
                        <div className="dropdown-bar flex justify-content-center">
                            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Country" ilter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="p-drop" />
                        </div>

                        {/* duration */}
                        <div className="dropdown-bar flex justify-content-center">
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Duration" className="p-drop" />
                        </div>

                        {/* price range */}
                        <div className="dropdown-bar flex justify-content-center">
                            <Dropdown placeholder="PriceRange" className="p-drop">
                                <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" range />
                                <div className="p-dropdown-panel"></div>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="sort-clear">
                        <div className="sort-text">
                            <div className="sort-by">SORT BY :</div>
                            <div className="country-name-btn">Country</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-12 flex flex-column align-items-center">
                <div className="col-10">
                    <h3 className="mb-0 ml-2">Tourpackages</h3>
                    <div className="col flex justify-content-end">
                        <Button label="add" icon="pi pi-plus" onClick={() => setShowCreateDialog(true)} role="tourpackages-add-button" />
                        <SplitButton model={menuItems} dropdownIcon="pi pi-ellipsis-v" buttonClassName="hidden" menuButtonClassName="ml-1 p-button-text"></SplitButton>
                    </div>
                </div>
                <div className="grid col-10">
                    <div className="col-12" role="tourpackages-datatable">
                        <TourpackagesDatatable items={data} onRowDelete={onRowDelete} onEditRow={onEditRow} onRowClick={onRowClick} />
                    </div>
                </div>
                <AreYouSureDialog header="Delete" body="Are you sure you want to delete this record?" show={showAreYouSureDialog} onHide={() => setShowAreYouSureDialog(false)} onYes={() => deleteRow()} />
                <TourpackagesEditDialogComponent entity={data[selectedEntityIndex]} show={showEditDialog} onHide={() => setShowEditDialog(false)} onEditResult={onEditResult} />
                <TourpackagesCreateDialogComponent show={showCreateDialog} onHide={() => setShowCreateDialog(false)} onCreateResult={onCreateResult} />
                <TourpackagesFakerDialogComponent show={showFakerDialog} onHide={() => setShowFakerDialog(false)} onFakerCreateResults={onFakerCreateResults} />
                <TourpackagesSeederDialogComponent show={showSeederDialog} onHide={() => setShowSeederDialog(false)} onSeederResults={onSeederResults} />
            </div> */}
        </div>
    );
};
const mapState = (state) => ({
    //
});
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(TourpackagesPage);
