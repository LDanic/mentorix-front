export class ModalSaveProcess {
    constructor(formData, tipo, projectId) {
        this.formData = formData;
        this.tipo = tipo;
        this.projectId = projectId;
    }

    async save() {
        this.validate();
        const cleanData = this.prepareData();
        const response = await this.apiCall(cleanData);
        this.onSuccess(response); 
        return response;
    }


    validate() {
        throw new Error("prepareData() debe implementarse en la subclase");
    }

    prepareData() {
        throw new Error("prepareData() debe implementarse en la subclase");
    }

    async apiCall(cleanData) {
        const url = `http://127.0.0.1:8000/mentorix/api/${this.tipo}s/`;
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cleanData),
        });
        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }
        return res.json();
    }

    onSuccess(response) {
        console.log(`${this.tipo} creada:`, response);
    }
}


export class TaskSaveProcess extends ModalSaveProcess {
    validate() {
        const { nombre, responsable, status, fechaVencimiento } = this.formData;
        if (!nombre || !responsable || !status || !fechaVencimiento) {
            throw new Error("Faltan campos obligatorios");
        }
    }

    prepareData() {
        const { nombre, responsable, fechaVencimiento, status } = this.formData;
        return {
            project_id: parseInt(this.projectId),
            name: nombre,
            assigned_to: responsable,
            deadline: fechaVencimiento,
            status: status,
        };
    }
}


export class IssueSaveProcess extends ModalSaveProcess {
    validate() {
        const { nombre, responsable, status } = this.formData;
        if (!nombre || !responsable || !status) {
            throw new Error("Faltan campos obligatorios");
        }
    }

    prepareData() {
        const { nombre, responsable, status } = this.formData;
        return {
            project_id: parseInt(this.projectId),
            name: nombre,
            assigned_to: responsable,
            status: status,
        };
    }
}


export function createSaveProcess(formData, tipo, projectId) {
    if (tipo === "tarea") {
        return new TaskSaveProcess(formData, 'task', projectId);
    } else {
        return new IssueSaveProcess(formData, 'issue', projectId);
    }
}
