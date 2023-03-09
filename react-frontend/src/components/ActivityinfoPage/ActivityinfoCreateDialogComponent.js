
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';


 
const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const ActivityinfoCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            activityName: _entity.activityName,
            image: _entity.image,
            activityType: _entity.activityType,
            location: _entity.location,
            description: _entity.description,
            contactinfo: _entity.contactinfo

        };

        setLoading(true);
        try {
            const result = await client.service("activityinfo").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="activityinfo-create-dialog-component">
                <div>
                    <p className="m-0" >Activity Name:</p>
                    <InputText className="w-full mb-3" value={_entity?.activityName} onChange={(e) => setValByKey("activityName", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Image:</p>
                    <InputText className="w-full mb-3" value={_entity?.image} onChange={(e) => setValByKey("image", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Activity Type:</p>
                    <InputText className="w-full mb-3" value={_entity?.activityType} onChange={(e) => setValByKey("activityType", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Activity Location:</p>
                    <InputText className="w-full mb-3" value={_entity?.location} onChange={(e) => setValByKey("location", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Description:</p>
                    <InputText className="w-full mb-3" value={_entity?.description} onChange={(e) => setValByKey("description", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Contact Info:</p>
                    <InputText type="number" className="w-full mb-3" value={_entity?.contactinfo} onChange={(e) => setValByKey("contactinfo", e.target.value)}  />
                </div>


                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(ActivityinfoCreateDialogComponent);
// createDialog_code.template
