import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-perfil-create',
  templateUrl: './perfil-create.component.html',
  styleUrls: ['./perfil-create.component.css']
})
export class PerfilCreateComponent implements OnInit {
  profileFormGroup!: any;
  avatarFormGroup!: any;
  technicalId: number;
  file?:File |null;
  errorMessage: string = '';
  constructor(  public formBuilder: FormBuilder,
                @Inject(MAT_DIALOG_DATA) public modalData: {
                  technicalId: number,
                }) {
            console.log(this.modalData.technicalId)
            this.technicalId = this.modalData.technicalId;
  }

  ngOnInit(): void {
    this.createForm();
    this.avatarForm();
  }
  createForm(){
    this.profileFormGroup = this.formBuilder.group({
      technicalId: [''],
      name: ['', [Validators.required]],
      resume: [''],
      phone: ['',  [Validators.required]],
      birthDate: [''],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  attachFileChange($event: Event) {
    // @ts-ignore
    const  file = $event.target.files[0];
    if (file) {
      const fileSizeMB = file.size / 1024 / 1024;
      const allowedFileTypes = ['gif', 'jpg', 'jpeg', 'png'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (fileSizeMB <= 3.5 && allowedFileTypes.includes(fileExtension)) {
        // El archivo cumple con los requisitos, puedes realizar las operaciones necesarias aquí
        //console.log(file);
        this.errorMessage = '';
        this.file = file;
      } else {
        // El archivo no cumple con los requisitos, establecemos el mensaje de error correspondiente
        if (fileSizeMB > 3.5) {
          this.errorMessage = 'El archivo excede el tamaño máximo permitido (3.5 MB).';
        } else if (!allowedFileTypes.includes(fileExtension)) {
          this.errorMessage = 'Formato de archivo no válido. Se admiten solo archivos .doc, .docx o .pdf.';
        }
      }
    }
  }
  avatarForm(){
    this.avatarFormGroup = this.formBuilder.group({
      technicalId: [''],
      avatar: [''],
    });
  }
}
