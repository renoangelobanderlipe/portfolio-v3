import { Card, Chip, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from 'react-router-dom';

export const TableComponent = ({ rows = [], columns = [], sx }) => {
  return (
    <Card className={`${sx} overflow-scroll`}>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {columns.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, index) => {
              const classes = "p-4 border-b border-blue-gray-50"
              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.year}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.project_title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.about}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {
                      row.category.map((category, index) => <>
                        <div className="">
                          <Chip className="w-fit" size="lg" value={category} key={index} />
                        </div>
                      </>)
                    }
                  </td>
                  <td className={classes}>
                    {
                      row.tools_used.map((tools, index) => <>
                        <div className="flex">
                          <Chip className="w-fit" size="lg" value={tools} key={index} />
                        </div>
                      </>)
                    }
                  </td>
                  <td className={classes}>
                    <Link to={row.project_url}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {row.project_url}
                      </Typography>
                    </Link>
                  </td>
                </tr>
              );
            })
          }

        </tbody>
      </table>
    </Card>
  );
}