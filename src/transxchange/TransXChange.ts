import {ATCOCode} from "../reference/NaPTAN";
import autobind from "autobind-decorator";

/**
 * Trimmed down version of the JSON generated by the XML parser
 */
export interface TransXChange {
  stops: ATCOCode[];
}

/**
 * Function that converts the JSON output from the XML parser into a TransXChange object
 */
export type ParseTransXChange = (data: Object) => TransXChange;

@autobind
export class TransXChangeFactory {

  /**
   * Extract the stops
   */
  public getTransXChange(data: any): TransXChange {
    console.log(data.TransXChange.StopPoints);
    return {
      stops: []
    };
  }

}