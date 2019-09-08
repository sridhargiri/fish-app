import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FishDataService, Fish } from '../fish-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fish-submission',
  templateUrl: './fish-submission.component.html',
})
export class FishSubmissionComponent {
/**
   * Form to enter all new submission input, with some validators
   * for required inputs.
   */
  submissionForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    img_url: new FormControl('', [Validators.required]),
  });

  constructor(private fishService: FishDataService, private router: Router) {}

  /**
   * Validate input, create a new submission, add it to the dataset.
   */
  onSubmit(): void {
    if (!this.submissionForm.valid) {
      alert('Please fill out all form boxes.');
      return;
    }

    const formValue = this.submissionForm.value;

    const sub: Fish = {
      name: formValue.name,
      description: formValue.description,
      img_url: formValue.img_url,
    };

    this.fishService.addData(sub);
    this.router.navigate(['/']);
  }
}
