import { FileStepService } from './file-step.service';
import { FileTrackerService } from './file-tracker.service';
import { FileService } from './file.service';
import { FileMatrixService } from './file-matrix.service';
import { StatusService } from './status.service';
import { UserService } from './user.service';
import { CodeSetService } from './code-set.service';

export const services : any[] = [
    FileStepService,
    FileTrackerService,
    FileService,
    FileMatrixService,
    StatusService,
    UserService,
    CodeSetService
];

export { 
    FileStepService, 
    FileTrackerService, 
    FileService, 
    FileMatrixService, 
    StatusService, 
    UserService, 
    CodeSetService 
}
