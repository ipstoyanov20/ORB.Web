/* tslint:disable */
/* eslint-disable */
/**
 * Online Resume Builder API
 * An API for Online Resume Builder
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DateOnly } from './date-only';
/**
 * 
 * @export
 * @interface EducationVM
 */
export interface EducationVM {
    /**
     * 
     * @type {string}
     * @memberof EducationVM
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof EducationVM
     */
    resumeId: string;
    /**
     * 
     * @type {string}
     * @memberof EducationVM
     */
    schoolName: string;
    /**
     * 
     * @type {string}
     * @memberof EducationVM
     */
    degree: string;
    /**
     * 
     * @type {string}
     * @memberof EducationVM
     */
    fieldOfStudy: string;
    /**
     * 
     * @type {string}
     * @memberof EducationVM
     */
    description: string;
    /**
     * 
     * @type {DateOnly}
     * @memberof EducationVM
     */
    startDate: DateOnly;
    /**
     * 
     * @type {DateOnly}
     * @memberof EducationVM
     */
    endDate?: DateOnly;
}
