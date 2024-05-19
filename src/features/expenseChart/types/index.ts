type ChartData = {
    date: string;
    [key: string]: number | string;
};

type GroupChartByDate = Map<string, ChartData>

export type {
    ChartData,
    GroupChartByDate,
}