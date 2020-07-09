using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineMonitoringWeb.DAL.MngDashboard
{
     public enum Hierarchy
    {
        Regional = 0,
        Distribution = 1,
        Area = 2,
        Station = 3,
        Unit = 4,
    }

    public class section
    {
       public int id;
        public Hierarchy type;
        public  string Criteria()
        {
            string critera = "";
            switch (type )
            {
                case Hierarchy.Unit:
                    critera = "UnitId";
                    break;
                case Hierarchy.Station:
                    critera = "StationID";
                    break;
                case Hierarchy.Area:
                    critera = "StationID";
                    break;
                case Hierarchy.Distribution:
                    critera = "StationID";
                    break;
                case Hierarchy.Regional:
                    critera = "StationID";
                    break;

            }
            // \"AreaID\"='3' 
            return " \""+critera +"\"='"+id.ToString()+ "' AND ";
        }
    }

}
