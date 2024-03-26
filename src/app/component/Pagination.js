function Pagination() {
    return (
        <>
            <div className="dds__select dds__select--sm dds__pagination__per-page-select" data-dds="select">
				<div className="dds__select__wrapper">
					<select className="dds__select__field border border-black h-8" id="590825466-per-page">
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="30">30</option>
						<option value="75">75</option>
						<option value="100">100</option>
						<option value="125">125</option>
					</select>
				</div>
			</div>

        </>
    )
}

export default Pagination;