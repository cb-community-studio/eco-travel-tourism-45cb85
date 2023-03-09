
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';


const PersonaldetailsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.icNo}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.passportNo}</p>
    const calendarTemplate3 = (rowData, { rowIndex }) => <Calendar className="w-20rem" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(rowData.passportExpDate)} showTime ></Calendar>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.passportCountry}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="name" header="Name" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="icNo" header="IC No" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="passportNo" header="Passport No" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="passportExpDate" header="Passport Expired Date" body={calendarTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="passportCountry" header="Passport Issuing Country" body={pTemplate4} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default PersonaldetailsDataTable;