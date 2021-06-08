package br.com.amaurymartin.anvisamedicamenth2.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.amaurymartin.anvisamedicamenth2.domain.models.Company;
import br.com.amaurymartin.anvisamedicamenth2.domain.models.Medicament;
import br.com.amaurymartin.anvisamedicamenth2.repositories.CompanyRepository;
import br.com.amaurymartin.anvisamedicamenth2.repositories.MedicamentRepository;

@Service
public class CompanyService {

	@Autowired
	private CompanyRepository companyRepository;
	
	@Transactional(readOnly = true)

	public List<Company> findAll() {
		List<Company> companies = companyRepository.findAll();
		return companies;
	}

	public Company findById(Integer id) {
		Optional<Company> companies = companyRepository.findById(id);
		return companies.orElse(null);
	}

}
