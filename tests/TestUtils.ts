import { IAnalyser } from "../src/components/charts/analysis/Models";
import { Decision, Pairing, Pattern } from "../src/components/charts/Models";

export class TestUtils {

    public static mockFetch(data: any) {
        return jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json: () => data,
                status: 200
            })
        );
    }

    public static mockFetchNotOk(error: string) {
        return jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: false,
                status: 500,
                statusText: error
            })
        );
    }

    public static mockErrorFetch(error: string) {
        return jest.fn().mockImplementation(() => {
            throw new Error(error);
        });
    }

    public static mockAnalyser(decision: Decision, confidence: number, comment: string): IAnalyser {
        return {
            analyse: jest.fn((pairings: Pairing[], index: number): Pattern => {
                return {
                    confidence,
                    decision,
                    comment
                };
            })
        };
    }
}

export interface TestData {
    input: any;
    expected: any;
    executed: number[];
}
