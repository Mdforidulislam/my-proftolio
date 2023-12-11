const Overview = ({title,description}) => {
    return (
        <div className="py-10">
            <h1 className="text-3xl text-[#ffb505] ">{title}</h1>
            <p className="text-white ">{description}</p>
            <p className="text-white">-------------------------------------------------------</p>
        </div>
    );
};

export default Overview;