
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';


const ActivityinfoDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.activityName}</p>
    const imageTemplate1 = (rowData, { rowIndex }) => <Image src={rowData.image}  alt="Image" height="60px" />
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.activityType}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.location}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.contactinfo}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="activityName" header="Activity Name" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="image" header="Image" body={imageTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="activityType" header="Activity Type" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="location" header="Activity Location" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="contactinfo" header="Contact Info" body={pTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ActivityinfoDataTable;