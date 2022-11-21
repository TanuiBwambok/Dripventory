import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import clsx from "clsx";
import PropTypes from "prop-types";
import * as React from "react";
import { AutoSizer, Column, Table } from "react-virtualized";

const classes = {
  flexContainer: "ReactVirtualizedDemo-flexContainer",
  tableRow: "ReactVirtualizedDemo-tableRow",
  tableRowHover: "ReactVirtualizedDemo-tableRowHover",
  tableCell: "ReactVirtualizedDemo-tableCell",
  noClick: "ReactVirtualizedDemo-noClick",
};

const styles = ({ theme }) => ({
  "& .ReactVirtualized__Table__headerRow": {
    ...(theme.direction === "rtl" && {
      paddingLeft: "0 !important",
    }),
    ...(theme.direction !== "rtl" && {
      paddingRight: undefined,
    }),
  },
  [`& .${classes.flexContainer}`]: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  [`& .${classes.tableRow}`]: {
    cursor: "pointer",
  },
  [`& .${classes.tableRowHover}`]: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  [`& .${classes.tableCell}`]: {
    flex: 1,
  },
  [`& .${classes.noClick}`]: {
    cursor: "initial",
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
        }
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            style={{
              borderWidth: "0.21px",
              borderColor: "#C9C9C9",
              borderStyle: "solid",
            }}
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit",
            }}
            headerHeight={headerHeight}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  style={{
                    borderWidth: "0.21px",
                    borderColor: "#C9C9C9",
                    borderStyle: "solid",
                  }}
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      rowCount: PropTypes.number.isRequired,
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = styled(MuiVirtualizedTable)(styles);

// ---

const sample = [
  ["Jordan 1 (J1)", "", "", "", ""],
  ["Nike Air Max 270", "", "", "", ""],
  ["Converse Chuck 70", "", "", "", ""],
  ["Nike  Blazer Mid 77", "", "", "", ""],
  ["Adidas Swift Run", "", "", "", ""],
  ["Nike Dunk Low", "", "", "", ""],
  ["Reebok Lite 3", "", "", "", ""],
];

function createData(id, Jordan, NikeAir, Converse, Adidas, NikeDunk, Reebok) {
  return { id, Jordan, NikeAir, Converse, Adidas, NikeDunk, Reebok };
}

const rows = [];

for (let i = 0; i < 15; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

export default function TablePage() {
  return (
    <Paper
      style={{
        height: 600,
        MinWidth: 500,
        MaxWidth: 700,
        alignItems: "center",
        borderWidth: "0.21px",
        borderColor: "#C9C9C9",
        borderStyle: "solid",
      }}
    >
      <VirtualizedTable
        rowCount={rows.length}
        // i={0}
        // rowIndex={i + 1}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 50,
            label: "#",
            rowCount: 1,
          },
          {
            width: 200,
            label: "Product  Name",
            dataKey: "Jordan",
          },
          {
            width: 120,
            label: "QTY\u00A0(g)",
            dataKey: "",
            numeric: true,
          },
          {
            width: 120,
            label: "Buying Price\u00A0(g)",
            dataKey: "",
            numeric: true,
          },
          {
            width: 120,
            label: "Selling Price\u00A0(g)",
            dataKey: "",
            numeric: true,
          },
          {
            width: 120,
            label: "Date\u00A0(g)",
            dataKey: "",
            numeric: true,
          },
          {
            width: 120,
            label: "Actions\u00A0(g)",
            dataKey: "",
            numeric: false,
          },
        ]}
      />
    </Paper>
  );
}
