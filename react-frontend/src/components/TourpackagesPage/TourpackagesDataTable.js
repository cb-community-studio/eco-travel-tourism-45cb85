
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Rating } from 'primereact/rating';


const TourpackagesDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const imageTemplate0 = (rowData, { rowIndex }) => <Image src={rowData.image}  alt="Image" height="60px" />
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.packageName}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.packageDuration}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.packagePrice}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.validDate}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.location}</p>
    const ratingTemplate6 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.ratings} cancel={false}  />
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.remark}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.contactinfo}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.isAvailable}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="image" header="Image" body={imageTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="packageName" header="Package Name" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="packageDuration" header="Duration" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="packagePrice" header="Price" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="validDate" header="Valid Date" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="location" header="Location" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="ratings" header="Eco-Friendliness Rating" body={ratingTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="remark" header="Remark" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="contactinfo" header="Contact Info" body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="isAvailable" header="isAvailable" body={pTemplate10} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default TourpackagesDataTable;