package br.com.amaurymartin.anvisamedicamenth2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.amaurymartin.anvisamedicamenth2.domain.models.Company;
import br.com.amaurymartin.anvisamedicamenth2.domain.models.Medicament;
import br.com.amaurymartin.anvisamedicamenth2.services.CompanyService;
import br.com.amaurymartin.anvisamedicamenth2.services.MedicamentService;

@RestController
@RequestMapping(value = "/com")
public class CompanyController {

	@Autowired
	private CompanyService companyService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Company> listAll() {
		return companyService.findAll();
	}

}
