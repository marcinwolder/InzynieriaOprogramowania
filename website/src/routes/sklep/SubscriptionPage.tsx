import ServerCard from "./ServerCard";

const SubscriptionsPage = () => {
  const handleServerSelect = (serverType: String) => {
    alert(`You selected the ${serverType} server!`);
};

  return (
    <div className="flex flex-col h-screen w-full -mt-12 items-center justify-center">
        <h1 className="text-2xl mb-4">Wybierz opcję serwera</h1>
        <div className="h-2/3 w-5/6 px-16 flex mt-8 gap-4">
            <div className="h-full w-1/5 mt-4">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                            <th className="text-l">Specyfikacja</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Procesor</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                            </tr>
                            <tr>
                                <td>Dysk SSD</td>
                            </tr>
                            <tr>
                                <td>Limit slotów</td>
                            </tr>
                            <tr>
                                <td>Okres min.</td>
                            </tr>
                            <tr>
                                <td>Lokalizacja</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                {/* Lite Server */}
                <ServerCard
                title="Lite"
                cpu="1 x 3.6 GHz"
                ram="4 GB"
                storage="20 GB"
                slots="max. 5"
                duration="2 tyg."
                location="Europe"
                onClick={() => handleServerSelect("Lite")}
                />
                {/* Standard Server */}
                <ServerCard
                title="Standard"
                cpu="3 x 3.6 GHz"
                ram="8 GB"
                storage="36 GB"
                slots="max. 10"
                duration="2 tyg."
                location="Europe"
                onClick={() => handleServerSelect("Standard")}
                />
                {/* Premium Server */}
                <ServerCard
                title="Premium"
                cpu="6 x 3.6 GHz"
                ram="16 GB"
                storage="64 GB"
                slots="no limit!"
                duration="1 mies."
                location="Europe"
                onClick={() => handleServerSelect("Premium")}
                />
                {/* Individual Server */}
                <ServerCard
                title="Individual"
                cpu="max. 10 x 3.6 GHz"
                ram="max. 32 GB"
                storage="max. 126 GB"
                slots="no limit!"
                duration="1 mies."
                location="Europa"
                onClick={() => handleServerSelect("Individual")}
                /> 
        </div>
    </div>
);
};

export default SubscriptionsPage;